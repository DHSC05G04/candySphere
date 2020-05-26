'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //await queryInterface.createDatabase('candySphere');

    /* Incluir tabela status */
    await queryInterface.createTable(
      'status',{
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          unique:true,
          allowNull: false,
        }
      });

      console.log('Status OK')

    /* Incluir tabela formas_pagamento */
    await queryInterface.createTable(
      'formas_pagamento',{
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        taxa: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0.00
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          default: true,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        }
      })

      console.log('Formas de PGTO OK')

/* Incluir tabela tipos_itens */
    await queryInterface.createTable(
      'tipos_itens', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

      });

      console.log('Tipos de itens OK')

    /* Incluir tabela unidades */
    await queryInterface.createTable(
      'unidades', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        unidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

        });

        console.log('Unidades OK')

    /* Incluir tabela unidades_por_tipo */
    await queryInterface.createTable(
      'unidades_por_tipo', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        tipos_itens_id:{
          type:Sequelize.INTEGER.UNSIGNED,
          alowNull: false,
          references: {
            model: 'Tipos_itens',
            key: 'id'
          },
        },
        unidades_id:{
          type:Sequelize.INTEGER.UNSIGNED,
          alowNull: false,
          references: {
            model: 'Unidades',
            key: 'id'
          },
        }
        });

        console.log('Unidades por tipo OK')


    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      cpf: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Clientes OK')

    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.DECIMAL
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Funcionários OK')

    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome_usuario: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      acesso: {
        type: Sequelize.INTEGER
      },
      funcionario_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'funcionarios',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Usuários OK')

    await queryInterface.createTable('estocaveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'tipos_itens',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'unidades',
          key: 'id'
        }
      },
      custo_unitario: {
        type: Sequelize.DECIMAL
      },
      validade: {
        type: Sequelize.DATE
      },
      vendavel: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Estocáveis OK')

    await queryInterface.createTable('receitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      tempo_preparo: {
        type: Sequelize.INTEGER
      },
      rendimento: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Receitas OK')

    await queryInterface.createTable('ingredientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      estoque_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'unidades',
          key: 'id'
        }
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'receitas',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Ingredientes OK')

    await queryInterface.createTable('instrucoes_preparos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      instrucao: {
        type: Sequelize.STRING
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'receitas',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Instruções de preparo OK')

    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      estoque_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Produtos OK')
    
    /* Incluir tabela Terminais */
    await queryInterface.createTable('terminais', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: Sequelize.STRING,

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Terminais OK')

    /* Incluir tabela Caixa */
    await queryInterface.createTable('caixas', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      hora_abertura: Sequelize.DATE,
      hora_fechamento: Sequelize.DATE,
      terminal_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'terminais'
          },
          key:'id'
        }
      },
      usuario_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'usuarios'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Caixas OK')

    /* Incluir tabela Pedidos */
    await queryInterface.createTable('pedidos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      entrada: Sequelize.DATE,
      entrega: Sequelize.DATE,
      entrega: Sequelize.DATE,
      total: Sequelize.DECIMAL,
      sinal: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      status_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'status'
          },
          key:'id'
        }
      },
      caixa_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'caixas'
          },
          key:'id'
        }
      },
      cliente_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'clientes'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Pedidos OK')

    /* Incluir tabela Comandas */
    await queryInterface.createTable('comandas', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      nota_fiscal: Sequelize.STRING,
      
      pedido_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pedidos'
          },
          key:'id'
        }
      },
      produto_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'produtos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Comandas OK')

    /* Incluir tabela Recebimentos */
    await queryInterface.createTable('recebimentos', {
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: Sequelize.DECIMAL,
      aprovado: Sequelize.BOOLEAN,
      
      pedido_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pedidos'
          },
          key:'id'
        }
      },
      caixa_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'caixas'
          },
          key:'id'
        }
      },
      forma_pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'formas_pagamento'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }

    });

    console.log('Recebimentos OK')

    /* Incluir tabela Contas */
    await queryInterface.createTable('contas', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: Sequelize.DECIMAL,
      aprovado: Sequelize.BOOLEAN,
      usuarios_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Contas OK')

    /* Incluir tabela Pagamentos */
    queryInterface.createTable('pagamentos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data_pgto: Sequelize.DATE,
      valor: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      status_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'status'
          },
          key:'id'
        }
      },
      conta_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'contas'
          },
          key:'id'
        }
      },
      formas_pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'formas_pagamento'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Pagamentos OK')

    /* Incluir tabela conta_movimento */
    await queryInterface.createTable('conta_movimentos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data: Sequelize.DATE,
      saldo: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      recebimentos_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'recebimentos'
          },
          key:'id'
        }
      },
      pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pagamentos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    console.log('Conta Movimento OK')

    return console.log('Banco de dados CandySphere criado corretamente!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropDatabase('candySphere');    
  }
};