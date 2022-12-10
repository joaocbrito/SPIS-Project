const token = '618e882b15bf1ad0599491251a20e0';

async function FetchAllMarcas() {
    console.log("hora de buscar marcas")
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                        query{
                            allMarcas { id nome}
                        }            
                        `
                }),
            }
        )
        const data = await res.json()
        console.log(data)
        return data.data.allMercados
    } catch (error) {
        console.log(error);
        return error
    }
}