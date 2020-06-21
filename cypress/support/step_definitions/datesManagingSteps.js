/// <reference types="cypress" />

import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^Current date is (.+?)$/, (neededDate) => {
    neededDate = neededDate.replace('/', ',');
    const customDate = Cypress.moment(neededDate);
    cy.clock(customDate);
    const customDateFormatted = customDate.format('dddd, DD MMMM YYYY');
    cy.get('[aria-label="' + customDateFormatted + '"]').click();
});

And(/^I choose date$/, () => {
    const futureDate = Cypress.moment('6, 18, 2020');
    cy.clock(futureDate);
    const futureDateFormatted = futureDate.format('dddd, DD MMMM YYYY');
    cy.get('[aria-label="' + futureDateFormatted + '"]').click(); // [aria-label="Monday, 22 June 2020"]
});