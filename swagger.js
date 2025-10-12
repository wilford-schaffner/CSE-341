const swaggerAutogen = require('swagger-autogen')();
const connection = require("dotenv");
connection.config({ quiet: true });

const doc = {
  info: {
    title: 'CSE 341 Contacts API',
    description: 'API for managing contacts in CSE 341 lesson 4',
    version: '1.0.0',
  },
  host: process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost:8080',
  schemes: process.env.RENDER_EXTERNAL_HOSTNAME ? ['https'] : ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Contacts',
      description: 'Contact management endpoints'
    }
  ],
  definitions: {
    Contact: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          description: 'Unique identifier for the contact'
        },
        firstName: {
          type: 'string',
          description: 'First name of the contact'
        },
        lastName: {
          type: 'string',
          description: 'Last name of the contact'
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'Email address of the contact'
        },
        favoriteColor: {
          type: 'string',
          description: 'Favorite color of the contact'
        },
        birthday: {
          type: 'string',
          format: 'date',
          description: 'Birthday of the contact'
        }
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    },
    CreateContact: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          description: 'First name of the contact'
        },
        lastName: {
          type: 'string',
          description: 'Last name of the contact'
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'Email address of the contact'
        },
        favoriteColor: {
          type: 'string',
          description: 'Favorite color of the contact'
        },
        birthday: {
          type: 'string',
          format: 'date',
          description: 'Birthday of the contact'
        }
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    },
    UpdateContact: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          description: 'First name of the contact'
        },
        lastName: {
          type: 'string',
          description: 'Last name of the contact'
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'Email address of the contact'
        },
        favoriteColor: {
          type: 'string',
          description: 'Favorite color of the contact'
        },
        birthday: {
          type: 'string',
          format: 'date',
          description: 'Birthday of the contact'
        }
      }
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
