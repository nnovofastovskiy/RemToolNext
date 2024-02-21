'use strict';

/**
 * contacts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contacts.contacts');
