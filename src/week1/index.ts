import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifier";
import DinnerManager from "./domain/interface/DinnerManager";

const dinner = container.get<DinnerManager>(SERVICE_IDENTIFIER.DINNER);
dinner.organize()
