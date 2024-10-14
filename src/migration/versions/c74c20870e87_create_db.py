"""Create db

Revision ID: c74c20870e87
Revises: 
Create Date: 2024-10-10 21:38:50.415828

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy import text


# revision identifiers, used by Alembic.
revision: str = 'c74c20870e87'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    # conn = op.get_bind()
    # if conn.execute(text("SELECT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'sextype')")).scalar():
    #     op.execute("DROP TYPE sextype")
    # conn = op.get_bind()
    # if conn.execute(text("SELECT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'typeweight')")).scalar():
    #     op.execute("DROP TYPE typeweight")
    # if conn.execute(text("SELECT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'typedist')")).scalar():
    #     op.execute("DROP TYPE typedist")
    op.create_table('load_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_username', sa.Integer(), nullable=False),
    sa.Column('load_type', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_load_type_id'), 'load_type', ['id'], unique=False)
    op.create_table('part_of_body',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('part_of_body', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_part_of_body_id'), 'part_of_body', ['id'], unique=False)
    op.create_table('part_of_muscle',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_part_of_body', sa.Integer(), nullable=False),
    sa.Column('part_of_muscle', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_part_of_muscle_id'), 'part_of_muscle', ['id'], unique=False)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('hash_password', sa.LargeBinary(), nullable=False),
    sa.Column('salt', sa.LargeBinary(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('date_of_birthday', sa.Date(), nullable=False),
    sa.Column('sex', sa.Enum('man', 'woman', name='sextype'), nullable=False),
    sa.Column('weight', sa.Float(), nullable=True),
    sa.Column('height', sa.Integer(), nullable=True),
    sa.Column('date_registration', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_index(op.f('ix_user_id'), 'user', ['id'], unique=False)
    op.create_table('additional_info_training',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_username', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('id_load_type', sa.Integer(), nullable=False),
    sa.Column('calories', sa.Integer(), nullable=True),
    sa.Column('time_training_start', sa.Time(), nullable=True),
    sa.Column('time_training_finish', sa.Time(), nullable=True),
    sa.Column('tonnage', sa.Float(), nullable=True),
    sa.Column('comment', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['id_load_type'], ['load_type.id'], ),
    sa.ForeignKeyConstraint(['id_username'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_additional_info_training_id'), 'additional_info_training', ['id'], unique=False)
    op.create_table('exercise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_username', sa.Integer(), nullable=False),
    sa.Column('exercise', sa.String(), nullable=False),
    sa.Column('id_part_of_body', sa.Integer(), nullable=False),
    sa.Column('id_part_of_muscle', sa.Integer(), nullable=True),
    sa.Column('id_load_type', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_load_type'], ['load_type.id'], ),
    sa.ForeignKeyConstraint(['id_part_of_body'], ['part_of_body.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_exercise_id'), 'exercise', ['id'], unique=False)
    op.create_table('refresh_token',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_username', sa.Integer(), nullable=False),
    sa.Column('refresh_token', sa.String(), nullable=False),
    sa.Column('datetime_create', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['id_username'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_refresh_token_id'), 'refresh_token', ['id'], unique=False)
    op.create_table('training',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_username', sa.Integer(), nullable=False),
    sa.Column('id_exercise', sa.Integer(), nullable=False),
    sa.Column('weight', sa.Float(), nullable=False),
    sa.Column('type_weight', sa.Enum('kg', 'ibs', name='typeweight'), nullable=True),
    sa.Column('approach_numbers', sa.Integer(), nullable=True),
    sa.Column('number_of_repetitions', sa.Integer(), nullable=True),
    sa.Column('dist', sa.Float(), nullable=True),
    sa.Column('type_dist', sa.Enum('m', 'km', name='typedist'), nullable=True),
    sa.Column('time', sa.Time(), nullable=True),
    sa.Column('id_additional_info_training', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_additional_info_training'], ['additional_info_training.id'], ),
    sa.ForeignKeyConstraint(['id_exercise'], ['exercise.id'], ),
    sa.ForeignKeyConstraint(['id_username'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_training_id'), 'training', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_training_id'), table_name='training')
    op.drop_table('training')
    op.drop_index(op.f('ix_refresh_token_id'), table_name='refresh_token')
    op.drop_table('refresh_token')
    op.drop_index(op.f('ix_exercise_id'), table_name='exercise')
    op.drop_table('exercise')
    op.drop_index(op.f('ix_additional_info_training_id'), table_name='additional_info_training')
    op.drop_table('additional_info_training')
    op.drop_index(op.f('ix_user_id'), table_name='user')
    op.drop_table('user')
    op.drop_index(op.f('ix_part_of_muscle_id'), table_name='part_of_muscle')
    op.drop_table('part_of_muscle')
    op.drop_index(op.f('ix_part_of_body_id'), table_name='part_of_body')
    op.drop_table('part_of_body')
    op.drop_index(op.f('ix_load_type_id'), table_name='load_type')
    op.drop_table('load_type')
    # ### end Alembic commands ###
