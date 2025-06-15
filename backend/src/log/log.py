import logging
import logging.config

log_config = {
    'version': 1,
    'disable_existing_loggers': False,

    'formatters': {
        'standard': {
            'format': '%(asctime)s - [%(name)s] - %(levelname)s - %(message)s',
            'datefmt': '%d.%m.%Y %H:%M',
        },
        'colored': {
            '()': 'colorlog.ColoredFormatter',
            'format': '%(asctime)s - [%(name)s] - %(levelname)s - %(message)s',
            'datefmt': '%d.%m.%Y %H:%M',
        }
    },

    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'level': 'DEBUG',
            'formatter': 'standard',
            'stream': 'ext://sys.stdout',
        },
    },

    'loggers': {
        'postgres': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': False
        },
        'endpoint': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': False
        },
        'uvicorn': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        'uvicorn.error': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        'uvicorn.access': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
    },

    'root': {
        'handlers': ['console'],
        'level': 'WARNING',
    },
}

def get_logger(name: str):    
    logging.config.dictConfig(log_config)
    return logging.getLogger(name)

