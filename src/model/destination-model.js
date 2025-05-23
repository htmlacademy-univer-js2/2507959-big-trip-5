import { UpdateType } from '../const';
import Observable from '../framework/observable';

export default class DestinationModel extends Observable {
  #destinationList = [];
  #destinationsApi;
  #isLoaded = false;

  constructor(destinationsApi) {
    super();
    this.#destinationsApi = destinationsApi;
  }

  async init() {
    try {
      this.#destinationList = await this.#destinationsApi.destinations;
    } catch (err) {
      this.#destinationList = [];
    }
    this.#isLoaded = true;
    this._notify(UpdateType.INIT);
  }

  get destinations() {
    return this.#destinationList;
  }

  get isLoaded() {
    return this.#isLoaded;
  }

  getDestinationById(id) {
    return this.#destinationList.find((item) => item.id === id) || { name: '', description: '', pictures: [] };
  }
}
