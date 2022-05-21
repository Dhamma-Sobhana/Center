'use strict';

/**
 *  stay controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stay.stay', ({ strapi }) => ({
  async checkin(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.entityService.findOne('api::stay.stay',  id);
    entity.status = 'checked_in'
    entity = await strapi.entityService.update('api::stay.stay', id, {data: entity});

    return await this.sanitizeOutput(entity, ctx);
  },

  async checkout(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.entityService.findOne('api::stay.stay',  id);
    entity.status = 'confirmed' // TODO: Should be checked_out
    entity = await strapi.entityService.update('api::stay.stay', id, {data: entity});

    return await this.sanitizeOutput(entity, ctx);
  }
}));
