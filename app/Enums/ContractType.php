<?php

namespace App\Enums;

enum ContractType: string
{
    case FULL_TIME = 'full_time';
    case CONTRACTOR = 'contractor';
    case PART_TIME = 'part_time';
    case TEMPORARY = 'temporary';
    case OTHER = 'other';
}
