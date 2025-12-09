# Cache des Avis Google - Documentation

## Configuration Actuelle

Les avis Google sont mis en cache avec les paramètres suivants :

- **Durée du cache** : 48 heures (172800 secondes)
- **Séparation par langue** : Oui (cache séparé pour `fr` et `ro`)
- **Méthode** : `unstable_cache` de Next.js
- **Tags de cache** : `google-reviews-fr` et `google-reviews-ro`

## Fonctionnement

### Première requête
Lors de la première visite de la page d'accueil (pour une langue donnée) :
1. L'API Google Maps est appelée
2. Les avis sont récupérés
3. Les données sont mises en cache pour 48h
4. La page est rendue avec les avis

### Requêtes suivantes (< 48h)
1. Les avis sont servis depuis le cache
2. Aucun appel à l'API Google Maps
3. Temps de réponse très rapide

### Après 48h
1. Le cache expire automatiquement
2. Lors de la prochaine requête, l'API Google est rappelée
3. Le nouveau cache est créé pour 48h

## Invalidation Manuelle du Cache

Si vous avez besoin de rafraîchir les avis avant les 48h (par exemple, après avoir répondu à un nouvel avis), vous pouvez invalider le cache manuellement.

### Option 1 : Via l'API Next.js (Route API)

Créez un endpoint API pour invalider le cache :

```typescript
// app/api/revalidate-reviews/route.ts
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const lang = searchParams.get('lang') || 'all';

  // Vérifiez un secret pour la sécurité
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    if (lang === 'all') {
      revalidateTag('google-reviews-fr');
      revalidateTag('google-reviews-ro');
    } else {
      revalidateTag(`google-reviews-${lang}`);
    }

    return NextResponse.json({
      revalidated: true,
      message: `Cache invalidated for: ${lang}`,
      now: Date.now()
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Error revalidating'
    }, { status: 500 });
  }
}
```

**Utilisation :**
```bash
# Invalider tous les caches
curl -X POST "https://votre-domaine.com/api/revalidate-reviews?secret=VOTRE_SECRET&lang=all"

# Invalider uniquement le cache français
curl -X POST "https://votre-domaine.com/api/revalidate-reviews?secret=VOTRE_SECRET&lang=fr"

# Invalider uniquement le cache roumain
curl -X POST "https://votre-domaine.com/api/revalidate-reviews?secret=VOTRE_SECRET&lang=ro"
```

### Option 2 : Redéploiement

Le cache est stocké dans le système de fichiers de Next.js. Un redéploiement complet de l'application effacera tous les caches.

### Option 3 : Modification du code

Si vous changez le code de `getReviews.ts`, le cache sera automatiquement invalidé lors du prochain build.

## Surveillance et Métriques

### Comment vérifier si le cache fonctionne ?

1. **Première visite** : Vérifiez les logs serveur, vous devriez voir l'appel à l'API Google
2. **Visites suivantes** : Aucun appel API ne devrait être visible dans les logs
3. **Performance** : La page devrait se charger beaucoup plus rapidement

### Logs utiles

Dans le code actuel, les erreurs sont loggées :
- `"Aucun avis trouvé"` : Aucun avis retourné par l'API
- `"Erreur lors de la récupération des avis Google:"` : Erreur lors de l'appel API

## Limites et Considérations

### Quotas Google Maps API
- **Sans cache** : ~30 requêtes/jour (1 par visite moyenne)
- **Avec cache (48h)** : ~0.5 requêtes/jour (1 tous les 2 jours par langue)
- **Économie** : ~98% de réduction des appels API

### Fraîcheur des données
- Les nouveaux avis apparaîtront avec max 48h de délai
- Pour des avis plus frais, réduisez `revalidate` dans le code
- Pour invalider manuellement, utilisez l'API de revalidation

### Cache par environnement
- **Production** : Cache partagé entre toutes les requêtes
- **Développement** : Cache peut être désactivé (selon configuration Next.js)

## Modification de la Durée du Cache

Pour changer la durée du cache, éditez `server/getReviews.ts` :

```typescript
{
  revalidate: 86400,  // 24 heures (au lieu de 172800)
  tags: [`google-reviews-${lang}`],
}
```

**Durées courantes :**
- 1 heure = 3600
- 6 heures = 21600
- 12 heures = 43200
- 24 heures = 86400
- 48 heures = 172800 (actuel)
- 7 jours = 604800

## Support

Pour toute question ou problème avec le cache :
1. Vérifiez les logs serveur
2. Testez l'invalidation manuelle via l'API
3. En dernier recours, redéployez l'application
