const searchOpacNamesByLabel = async (endpoint, itemLabel) => {

    // Parametri URL
    const params = new URLSearchParams({
        core: "autori",
        "item:6003:Nome": encodeURIComponent(itemLabel),
        "filter_nocheck:6021:Tipo_nome": "Persona:A"
    });

    
    try {

        // opac.sbn.it
        const url = `https://${endpoint}/o/opac-api/titles-search-auth?${params.toString()}`

        const opacResponse = await fetch(url);
        const opacJson = await opacResponse.json();
        const resultList = opacJson.data.results
        
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