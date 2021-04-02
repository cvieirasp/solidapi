import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { DatabaseRepository } from '../../repositories/implementation/DatabaseRepository';
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';

const databaseRepository = new DatabaseRepository();
const mailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(databaseRepository, mailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }
