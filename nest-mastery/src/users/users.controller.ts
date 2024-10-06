import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserByID(@Param('id', ParseIntPipe) id: number ) {
    return this.userService.getUserByID(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  updateUserByID(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUserByID(id, updateUserDto);
  }

  @Delete(':id')
  deleteUserByID(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUserByID(id);
  }
}
