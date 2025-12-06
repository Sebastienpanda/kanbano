import {ContactsApi, CreateContact} from '@getbrevo/brevo';
import * as process from 'node:process';

export async function handler(event: { body: string; }, context: any) {
    try {
        const body = JSON.parse(event.body);
        const {email} = body;

        if (!email) {
            return {
                statusCode: 400,
                body: "Email is required"
            }
        }

        let contactAPI = new ContactsApi();
        (contactAPI as any).authentications.apiKey.apiKey = process.env["BREVO_API_KEY"]

        const LIST_ID = 5;

        let existingContact = null;

        try {
            existingContact = await contactAPI.getContactInfo(email);
        } catch (e: any) {
            if (e.status !== 404) throw e;
        }
        
        if (!existingContact) {
            const newContact = new CreateContact();
            newContact.email = email;
            newContact.listIds = [LIST_ID];

            await contactAPI.createContact(newContact);

            return {
                statusCode: 200,
                body: JSON.stringify({created: true})
            };
        }

        if (existingContact.body.listIds.includes(LIST_ID)) {
            return {
                statusCode: 200,
                body: JSON.stringify({alreadyInList: true})
            };
        }

        await contactAPI.updateContact(email, {
            listIds: [...existingContact.body.listIds, LIST_ID]
        });

        return {
            statusCode: 200,
            body: JSON.stringify({addedToList: true})
        };

    } catch (e: any) {
        console.error("Brevo error:", e);

        return {
            statusCode: 500,
            body: JSON.stringify({error: "Brevo error"})
        };
    }
}
