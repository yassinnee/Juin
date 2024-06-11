import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
export declare class SubscribersService {
    create(createSubscriberDto: CreateSubscriberDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSubscriberDto: UpdateSubscriberDto): string;
    remove(id: number): string;
}
