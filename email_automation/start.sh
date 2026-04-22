#!/bin/bash
# 机场出租车邮件自动处理系统 - 启动脚本

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

mkdir -p logs data

echo "======================================"
echo "  机场出租车邮件自动处理系统"
echo "======================================"

case "$1" in
  test)
    echo ">> 运行连接测试..."
    python3 test_connection.py
    ;;
  once)
    echo ">> 执行单次邮件检查..."
    python3 email_processor.py --once
    ;;
  report)
    HOURS="${2:-24}"
    echo ">> 生成最近${HOURS}小时报告..."
    python3 report.py "$HOURS"
    ;;
  start)
    echo ">> 启动守护进程（后台运行）..."
    nohup python3 email_processor.py > logs/daemon.log 2>&1 &
    echo $! > logs/daemon.pid
    echo "  PID: $(cat logs/daemon.pid)"
    echo "  日志: $SCRIPT_DIR/logs/daemon.log"
    echo "  已在后台启动！"
    ;;
  stop)
    if [ -f logs/daemon.pid ]; then
      PID=$(cat logs/daemon.pid)
      kill "$PID" 2>/dev/null && echo "  已停止 (PID: $PID)" || echo "  进程不存在"
      rm -f logs/daemon.pid
    else
      echo "  未找到运行中的进程"
    fi
    ;;
  status)
    if [ -f logs/daemon.pid ]; then
      PID=$(cat logs/daemon.pid)
      if kill -0 "$PID" 2>/dev/null; then
        echo "  ✅ 系统运行中 (PID: $PID)"
      else
        echo "  ❌ 系统已停止"
        rm -f logs/daemon.pid
      fi
    else
      echo "  ❌ 系统未运行"
    fi
    ;;
  *)
    echo "用法: $0 {test|once|start|stop|status|report [hours]}"
    echo ""
    echo "  test          - 测试所有邮箱连接"
    echo "  once          - 执行一次邮件检查"
    echo "  start         - 后台启动守护进程"
    echo "  stop          - 停止守护进程"
    echo "  status        - 查看运行状态"
    echo "  report [N]    - 查看最近N小时报告（默认24）"
    ;;
esac
