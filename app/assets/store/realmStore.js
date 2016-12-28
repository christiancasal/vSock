import Realm from 'realm';

class contactToAdd {
  static get () { return realm.objects(contactToAdd.schema.name) }
  static schema = {
    name: 'contactToAdd',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      numberType: {type: 'string'},
      numStringValue: {type: 'string'},
      isChosen: {type: 'bool'},
      createdTimestamp: {type: 'date'}
    }
  }
}
// Create Realm DB
const realm = new Realm({schema: [contactToAdd]})

// Retrieves all contacts in sorted(reversed) order
export const getAllContactsLS = () => {
  const contactsLS = contactToAdd.get().sorted('createdTimestamp', true)
  return contactsLS
}
// Adds a new contact to local storage
export const addContactLS = (obj) => {
  realm.write(() => {
    realm.create(contactToAdd.schema.name, {
      id: obj.numberValue,
      name: obj.name,
      numberType: obj.numberType,
      numStringValue: obj.numStringValue,
      isChosen: obj.isSwitchOn,
      createdTimestamp: new Date()
    })
  })
}
// Updates a contact's active status
export const updateContactLS = (obj, isSwitchOn) => {
  realm.write(()=> {
    try {
      obj.isSwitchOn = isSwitchOn
    }
    catch(e){
      console.warn(e)
    }
  })
}
// Deletes a contact from local storage
export const delContactLS = (obj) => {
  realm.write(() => {
    realm.delete(obj)
  })
}
