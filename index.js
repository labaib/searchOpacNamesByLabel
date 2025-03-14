/**
* Ottieni lista Nomi da OPAC SBN tramite etichetta
* @param {string} itemLabel - Etichetta entità da ricercare
* @param {string} [endpoint="opac.sbn.it"] - opzionale
* @returns {Array<{vid: string, label: string, type: string}>|[]} - Ritorna un array di oggetti
*/

const searchOpacNamesByLabel = async (itemLabel, endpoint = "opac.sbn.it") => {

    // Parametri URL
    const params = new URLSearchParams({
        core: "autori",
        "item%3A6003%3ANome": encodeURIComponent(itemLabel),
        "filter_nocheck:6021:Tipo_nome": "Persona:A"
    });

    
    try {

        // opac.sbn.it
        const url = `https://${endpoint}/o/opac-api/titles-search-auth?${params.toString()}`

        const opacResponse = await fetch(url);
        const opacJson = await opacResponse.json();
 
        const resultList = Promise.all(opacJson.data.results.map(async (entity) => ({
            vid: entity[0].id.replace("ITICCU", ""),
            label: entity[0].label.replace(" , ", ", "),
            type: entity[3].contents[0].value

        })));
        
        if (resultList.length > 0) {
            return resultList
        } else {
            return []
        }
    
    } catch (error) {
        console.error("Errore durante la verifica dello stato di login:", error);
        return []
    }

} 

// Esportazione funzione
export { searchOpacNamesByLabel };