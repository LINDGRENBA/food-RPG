import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import x from './js/aliens.js';

$(document).ready(function () {
  $('#x ').click(function () {
    const newState = stateControl(blueFood);
    $('# x-value').text(`x : ${newState.x}`);
  });




});



