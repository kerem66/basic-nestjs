import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService], // things that are used as dependency for other classes
})
export class MessagesModule {}
