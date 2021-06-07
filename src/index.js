import { run } from './app/app';
import "./app/main.scss";

import { AlertService } from './app/services/alert-service';
import { ComponentService } from './app/services/component-service';

const alertService = new AlertService()
const componentService = new ComponentService()

run(alertService, componentService);
