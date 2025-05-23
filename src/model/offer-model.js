import { UpdateType } from '../const';
import Observable from '../framework/observable';

export default class OfferModel extends Observable {
  #offerList = [];
  #offersApi;
  #isLoaded = false;

  constructor(offersApi) {
    super();
    this.#offersApi = offersApi;
  }

  async init() {
    try {
      this.#offerList = await this.#offersApi.offerList();
    } catch (err) {
      this.#offerList = [];
    }
    this.#isLoaded = true;
    this._notify(UpdateType.INIT);
  }

  get offerList() {
    return this.#offerList;
  }

  get isLoaded() {
    return this.#isLoaded;
  }

  getOfferById(type, id) {
    const offersByType = this.#offerList.find((offer) => offer.type === type);
    if (!offersByType) {
      return undefined;
    }
    return offersByType.offers.find((item) => item.id === id);
  }

  getOfferByType(type) {
    if (!Array.isArray(this.#offerList)) {
      return [];
    }
    return this.#offerList
      .filter((offer) => offer.type === type)
      .flatMap((offer) => offer.offers);
  }
}
