# asw-logger

## About
 
 This is a simple UI log collector lib.
 it uses session storage only.

``` javascript
 import logger from 'asw-logger'
 logger.SetLog({
   type: 'info', // it can be 'info', 'success', 'warning', 'error'
   msg: 'your logging message'
 })
```
some shortcut access

``` javascript
import { setInfoLog } from 'asw-logger'
setInfoLog('set your info log')
// same with 'success', 'warning', 'error'
```
``` javascript
logger.getLog(type, order, from, to)
```

param | default | about
---------|----------|---------
 type | all | type of error
 order | 1 | 1 is for new on top and -1 is for old on top
 from | current timestamp | -
 to | 0 | this is end timestamp.

**Author:** Shubham maurya