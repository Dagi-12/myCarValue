import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/users.entity';
export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  approved: boolean;
  
  @Expose()
  price: number;

  @Expose()
  year: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  milage: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
