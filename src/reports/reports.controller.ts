import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guards';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from 'src/users/users.entity';
import { ReportDto } from './dtos/report.dto';
import { serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-user.dto';
import { AdminGuard } from 'src/guards/admin.guards';
import { GetEstimateDto } from './dtos/get-estimate.dto';
@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return this.reportService.changeApproval(id, body.approve);
  }

  @Get()
  getEstimate(@Query() query:GetEstimateDto) {
    return this.reportService.createEstimate(query)
  }
}
