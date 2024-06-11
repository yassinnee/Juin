import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
export declare class SubscribersController {
    private readonly subscribersService;
    constructor(subscribersService: SubscribersService);
    create(createSubscriberDto: CreateSubscriberDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubscriberDto: UpdateSubscriberDto): string;
    remove(id: string): string;
}
