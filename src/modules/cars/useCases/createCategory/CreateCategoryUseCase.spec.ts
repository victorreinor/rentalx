import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Teste',
      description: 'Category description teste',
    };
    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'Category Teste',
        description: 'Category description teste',
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);

      await categoriesRepositoryInMemory.findByName(category.name);
    }).rejects.toBeInstanceOf(AppError);
  });
});
