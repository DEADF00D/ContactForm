"""empty message

Revision ID: 10b6dfca9c5a
Revises: f58aa0f2024e
Create Date: 2021-11-18 02:17:00.183698

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '10b6dfca9c5a'
down_revision = 'f58aa0f2024e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('form__submission', sa.Column('done', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('form__submission', 'done')
    # ### end Alembic commands ###