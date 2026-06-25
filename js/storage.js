const STORAGE_KEY = "tsla_clients";

function getClients() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveClient(client) {
    const clients = getClients();

    if (client.id) {
        // Update existing
        const index = clients.findIndex(c => c.id === client.id);
        if (index !== -1) {
            clients[index] = client;
        } else {
            clients.push(client);
        }
    } else {
        // Create new
        client.id = "TSLA" + Date.now();
        clients.push(client);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    return client.id;
}

function updateClient(id, updatedClient) {
    const clients = getClients().map(client => {
        if (client.id === id) {
            return { ...client, ...updatedClient };
        }
        return client;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}

function deleteClient(id) {
    const clients = getClients().filter(client => client.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}
