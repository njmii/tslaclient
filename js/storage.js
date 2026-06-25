const STORAGE_KEY = "tsla_clients";

function getClients() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveClient(client) {

    const clients = getClients();

    client.id = "TSLA" + Date.now();

    clients.push(client);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(clients)
    );

}

function updateClient(id, updatedClient) {

    const clients = getClients().map(client => {

        if (client.id === id) {
            return {
                ...client,
                ...updatedClient
            };
        }

        return client;

    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(clients)
    );

}

function deleteClient(id) {

    const clients = getClients().filter(client => {

        return client.id !== id;

    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(clients)
    );

}
