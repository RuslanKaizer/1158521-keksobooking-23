import { setAdFormSubmit, setAdFormReset, resetAdForm} from './ad-form.js';
import { setFilters, mapFiltersForm, resetMapForm } from './map-form.js';
import { addOffersToMap, clearMarkers, setDefaultCoordinates } from './map.js';
import { showAlert, disableForm, enableForm, debounce } from './util.js';
import { getData } from './api.js';
import { addPhotosListener } from './ad-form-photo.js';
import {  } from './ad-form.js';
import {  } from './map-form.js';

const RERENDER_DELAY = 500;

getData(
  (offers) => {
    enableForm(mapFiltersForm, 'map__filters');
    addOffersToMap(offers);
    const resetForm = () => {
      resetAdForm();
      resetMapForm();
      clearMarkers();
      setDefaultCoordinates();
      addOffersToMap(offers)
    };
    setAdFormSubmit(resetForm);
    setAdFormReset(resetForm);
    setFilters(debounce(
      () => {
        clearMarkers();
        addOffersToMap(offers);
      },
      RERENDER_DELAY,
    ));
  },
  (errorMessage) => {
    disableForm(mapFiltersForm, 'map__filters');
    showAlert(errorMessage);
  },
);

addPhotosListener();

