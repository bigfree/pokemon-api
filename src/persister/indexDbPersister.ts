import {del, get, set} from "idb-keyval";
import {PersistedClient, Persister} from "@tanstack/react-query-persist-client";

type CreateIDBPersister = (idbValidKey?: IDBValidKey) => Persister;

/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
export const createIDBPersister: CreateIDBPersister = (idbValidKey: IDBValidKey = "reactQuery") => ({
    persistClient: async (client: PersistedClient) => {
        set(idbValidKey, client);
    },
    restoreClient: async () => {
        return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
        await del(idbValidKey);
    },
} as Persister);