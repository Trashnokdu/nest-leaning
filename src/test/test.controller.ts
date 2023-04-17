import { Controller, Get, Param } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  getAll() {
    return 'returnd';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `${id} is Returned`;
  }
}
