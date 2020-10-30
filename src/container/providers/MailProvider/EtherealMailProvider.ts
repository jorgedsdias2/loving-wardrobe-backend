import nodemailer from 'nodemailer';

import IMailProvider from '@providers/MailProvider/models/IMailProvider';
import ISendMailDTO from '@providers/MailProvider/dtos/ISendMailDTO';

export default class EtherealMailProvider implements IMailProvider {
  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      transporter
        .sendMail({
          from: {
            name: from?.name || 'Equipe Love Wardrobe',
            address: from?.email || 'equipe@lovingwardrobe.com.br',
          },
          to: {
            name: to.name,
            address: to.email,
          },
          subject,
          html: templateData,
        })
        .then(message => {
          console.log('Message sent: %s', message.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
}
