import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.client('dynamodb', region_name = 'us-east-1') 
def lambda_handler(event, context):
    print('this is an event',event, 'this one')
    try:
        dynamodb.put_item(
            TableName='final',
            Item={  'client_name': {'S': event['client_name']},
                    'client_id': {'S': event['client_id']},
                    'product_name': {'S': event['product_name']}  } )
        return json(event) 
    except ClientError as e:
        print(e)