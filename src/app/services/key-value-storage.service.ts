import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class KeyValueStorageService {

  _storage: Storage;

  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  async setItem(key: string, value: any) {
    // eslint-disable-next-line no-underscore-dangle
    await this._storage.set(key, value);
  }

  async getItem(key: string) {
    // eslint-disable-next-line no-underscore-dangle
    const value = await this._storage.get(key);
    return value;
  }

}
