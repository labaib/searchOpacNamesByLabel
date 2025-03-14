# searchOpacNamesByLabel
Funzione per l'interrogazione dell'OPAC SBN Autori tramite API non ufficiale


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { searchOpacNamesByLabel } from 'https://cdn.jsdelivr.net/gh/labaib/searchOpacNamesByLabel@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { searchOpacNamesByLabel } from './js/searchOpacNamesByLabel.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { searchOpacNamesByLabel } from 'https://cdn.jsdelivr.net/gh/labaib/searchOpacNamesByLabel@main/index.js';

 (async () => {
     const names = await searchOpacNamesByLabel("Dante Alighieri");
 })();

</script>
```
```
<script type="module">
        
  import { searchOpacNamesByLabel } from './js/searchOpacNamesByLabel.js';

  (async () => {
    const names = await searchOpacNamesByLabel("Dante Alighieri");
  })();

</script>
```


