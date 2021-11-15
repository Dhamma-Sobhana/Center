'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  checkin: async (ctx) => {
    const { id } = ctx.params;
    let entity = await strapi.services.stay.findOne({ id });
    entity.status = 'checked_in'
    entity = await strapi.services.stay.update({ id }, entity);

    return sanitizeEntity(entity, { model: strapi.models.stay });
  },

  checkout: async (ctx) => {
    const { id } = ctx.params;
    let entity = await strapi.services.stay.findOne({ id });
    entity.status = 'confirmed' // TODO: Should be checked_out
    entity = await strapi.services.stay.update({ id }, entity);

    return sanitizeEntity(entity, { model: strapi.models.stay });
  }
};
