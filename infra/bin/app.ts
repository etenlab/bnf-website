#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { getConfig } from './getConfig';
import { FrontendStack } from '../lib/stacks/frontend-stack';

enum TAGS {
  PROJECT = 'project',
  ENVIRONMENT = 'environment',
}

const app = new cdk.App();
const config = getConfig(app);

cdk.Tags.of(app).add(TAGS.ENVIRONMENT, config.environment);

const appStack = new FrontendStack(app, `${config.environment}BnfApp`, {
  env: {
    account: config.awsAccountId,
    region: config.awsRegion,
  },
  appPrefix: config.appPrefix,
  envName: config.environment,
  domainName: config.app.domainName,
  appId: config.app.appId,
  enabled: config.app.enabled,
  createRoute53Record: config.app.createRoute53Record,
  certificateArn: config.app.certificateArn,
});

/** Tags */
cdk.Tags.of(appStack).add(TAGS.PROJECT, 'BNF');
