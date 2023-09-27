import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

export const importAcmCertificate = (
  scope: Construct,
  id: string,
  certificateArn: string,
) => {
  const certificate = acm.Certificate.fromCertificateArn(
    scope,
    id,
    certificateArn,
  );

  return certificate;
};
