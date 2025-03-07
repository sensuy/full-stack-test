import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatePermissionDto, CreatePermissionResponseDto } from './dto/create-permission.dto';
import { ListPermissionDto } from './dto/list-permission.dto';
import { PermissionOriginEnum } from './enum/permission-type.enum';
import { CreatePermissionSchema } from './schemas/create-permission.schema';
import { listPermissionSchema } from './schemas/list-permission.schema';
import { BadRequestDto, ConflictDto } from '@app/shared/exceptions';
import { JoiValidationPipe } from '@app/shared/pipes';

@ApiTags('Permission')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @Post()
  @ApiOperation({
    summary: 'Create a new permission'
  })
  @ApiCreatedResponse({
    description: 'The role has been successfully created',
    type: CreatePermissionResponseDto
  })
  @ApiBadRequestResponse({
    description: 'Validation failed.',
    type: BadRequestDto
  })
  @ApiConflictResponse({
    description: 'Permission already exists',
    type: ConflictDto
  })
  @UsePipes(new JoiValidationPipe(CreatePermissionSchema))
  async create(
    @Body() createPermissionDto: CreatePermissionDto
    ): Promise<CreatePermissionResponseDto> {
    return this.permissionService.create(createPermissionDto);
  }


  @Get(':type')
  @ApiOperation({
    summary: 'List all permissions of a given type'
  })
  @ApiParam({
    name: 'type',
    enum: PermissionOriginEnum,
    type: String,
    description: 'The type of the permission'
  })
  @ApiOkResponse({
    description: 'The permissions has been successfully listed',
    type: [ListPermissionDto]
  })
  @ApiBadRequestResponse({
    description: 'Validation failed.',
    type: BadRequestDto
  })
  @UsePipes(new JoiValidationPipe(listPermissionSchema))
  async list(
    @Param('type') type: PermissionOriginEnum
  ): Promise<ListPermissionDto[]> {
    return this.permissionService.listPermissionByType(type);
  }
}


