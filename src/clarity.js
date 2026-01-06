import Clarity from '@microsoft/clarity';

const projectId = "uxd4p2su11"

Clarity.init(projectId);
Clarity.identify("custom-id", "custom-session-id", "custom-page-id", "friendly-name");