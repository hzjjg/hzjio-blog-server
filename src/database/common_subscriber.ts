import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';

@EventSubscriber()
export class CommonSubscriber implements EntitySubscriberInterface {

    beforeInsert(event: InsertEvent<any>) {
        const entity = event.entity;
        entity.createdDate = new Date();
        entity.updatedDate = new Date();
    }

    beforeUpdate(event: UpdateEvent<any>) {
        const entity = event.entity;
        console.log(event);

        entity && (entity.updatedDate = new Date());

    }

}