const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const offerCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderOffers = (offers) => {
  const offersFragment = document.createDocumentFragment();

  const isElementVisible = (element, components) => {
    if (components.length === 0) {
      element.setAttribute('style', 'visibility: hidden;');
      return false;
    }
    element.setAttribute('style', 'visibility: visible;');
    return true;
  };

  const setAdPhotos = (photosElement, offer) => {
    if (!isElementVisible(photosElement, offer.photos)) {
      return;
    }

    photosElement.innerHTML = offer.photos.map((photo) => {
      return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    }).join('');
  };

  const setAdFeatures = (featuresElement, offer) => {
    if (!isElementVisible(featuresElement, offer.features)) {
      return;
    }

    featuresElement.innerHTML = offer.features.map((feature) => {
      return `<li class="popup__feature popup__feature--${feature}"></li>`;
    }).join('');
  };

  offers
    .forEach(({ offer, author }) => {
      const offerElement = offerCardTemplate.cloneNode(true);
      offerElement.querySelector('.popup__title').textContent = offer.title;
      offerElement.querySelector('.popup__text--address').textContent = offer.address;
      offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
      offerElement.querySelector('.popup__type').textContent = types[offer.type];
      offerElement.querySelector('.popup__text--capacity').textContent
        =`${offer.rooms} комнаты для ${offer.guests} гостей`;
      offerElement.querySelector('.popup__text--time').textContent
        =`Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

      const features = offerElement.querySelector('.popup__features');
      setAdFeatures(features, offer);

      offerElement.querySelector('.popup__description').textContent = offer.description;

      const photosElement = offerElement.querySelector('.popup__photos');
      setAdPhotos(photosElement, offer);

      offerElement.querySelector('.popup__avatar').setAttribute('src', `${author.avatar}`);
      offersFragment.appendChild(offerElement);
    });

  return offersFragment;
};

export { renderOffers };
