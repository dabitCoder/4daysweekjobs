<?php

namespace App\Enums;

enum Modality: string
{
    case REMOTE = 'Remote';
    case HYBRID = 'Hybrid';
    case OFFICE = 'Office';
}
