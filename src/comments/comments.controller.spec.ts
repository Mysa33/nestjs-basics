import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import {CommentDto} from '../dtos/comments.dto';

describe('Comments Controller', () => {
  let controller: CommentsController;
  let dto:CommentDto = new CommentDto();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      imports:[CommentDto]
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should getAll() to be defined', () => {
    expect(controller.getAll()).toBeDefined();
  });

  it('should getOneComment() to be defined', () => {
    expect(controller.getOneComment(1)).toBeDefined();
  });

  it('should create() to be defined', () => {
    expect(controller.create(dto)).toBeDefined();
  });

  it('should getAll() return an array', () => {
    let data:any[]= controller.getAll();
    expect(data).toBeDefined();
    expect(data).toBe('object');
  });

  it('should getOneComment() return an array', () => {
    let data:object = controller.getAll();
    expect(data).toBeDefined();
    expect(typeof(data)).toBeObject();
  });


});
