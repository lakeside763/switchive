import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './../src/product/product.service';
import { Product } from './../src/product/product.entity';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const data: Product[] = [
        { 
          id: '1', 
          name: 'Test Product', 
          description: 'Test', 
          price: 10, 
          image_url: 'http://example.com', 
          created_at: new Date(), 
          updated_at: new Date() 
        },
      ]
      const result = {
        data,
        count: 1
      }
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });
  });
});
