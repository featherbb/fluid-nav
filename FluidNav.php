<?php

/**
 * Copyright (C) 2015-2016 FeatherBB
 * based on code by (C) 2008-2012 FluxBB
 * and Rickard Andersson (C) 2002-2008 PunBB
 * License: http://www.gnu.org/licenses/gpl.html GPL version 2 or higher
 */

namespace FeatherBB\Plugins;

use FeatherBB\Core\Plugin as BasePlugin;

class FluidNav extends BasePlugin
{
    public function run()
    {
        View::addAsset('js', 'plugins/fluid-nav/pjax-standalone.js', array('type' => 'text/javascript'));
        View::addAsset('js', 'plugins/fluid-nav/script.js', array('type' => 'text/javascript'));
    }
}
