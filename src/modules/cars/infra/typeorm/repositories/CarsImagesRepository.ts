import { getRepository, Repository } from 'typeorm';

import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';

import { CarImage } from '../entities/CarImage';

export class CarsImagesRepository implements ICarsImagesRepository {
  private repositoriy: Repository<CarImage>;

  constructor() {
    this.repositoriy = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repositoriy.create({
      car_id,
      image_name,
    });

    await this.repositoriy.save(carImage);

    return carImage;
  }
}
