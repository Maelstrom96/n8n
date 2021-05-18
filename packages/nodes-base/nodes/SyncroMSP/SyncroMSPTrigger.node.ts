import {
    IHookFunctions,
    IWebhookFunctions,
 } from 'n8n-core';
 
 import {
    IDataObject,
    INodeType,
    INodeTypeDescription,
    IWebhookResponseData,
 } from 'n8n-workflow'; 
 
 export class SyncroMSPTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'SyncroMSP Trigger',
        name: 'syncromspTrigger',
        icon: 'file:syncromsp.png',
        group: ['trigger'],
        version: 1,
        subtitle: '={{$parameter["event"]}}',
        description: 'Handle SyncroMSP events via webhooks',
        defaults: {
            name: 'SyncroMSP Trigger',
            color: '#1ba4aa',
        },
        inputs: [],
        outputs: ['main'],
        credentials: [],
        webhooks: [
            {
                name: 'default',
                httpMethod: 'POST',
                responseMode: 'onReceived',
                path: 'webhook',
            },
        ],
        properties: [],
    };
    async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
        return {
            workflowData: [],
        };
    }
 }